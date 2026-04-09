"""
Сохранение и получение отзывов пациентов.
GET / — список одобренных отзывов
POST / — добавить новый отзыв (ожидает одобрения)
"""
import json
import os
import psycopg2  # noqa


def get_conn():
    return psycopg2.connect(os.environ["DATABASE_URL"])


def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    method = event.get("httpMethod", "GET")

    if method == "GET":
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            "SELECT id, name, stars, text, created_at FROM reviews WHERE approved = TRUE ORDER BY created_at DESC"
        )
        rows = cur.fetchall()
        cur.close()
        conn.close()
        reviews = [
            {
                "id": r[0],
                "name": r[1],
                "stars": r[2],
                "text": r[3],
                "date": r[4].strftime("%B %Y") if r[4] else "",
            }
            for r in rows
        ]
        return {"statusCode": 200, "headers": headers, "body": json.dumps(reviews, ensure_ascii=False)}

    if method == "POST":
        body = json.loads(event.get("body") or "{}")
        name = (body.get("name") or "").strip()
        stars = int(body.get("stars") or 5)
        text = (body.get("text") or "").strip()

        if not name or not text or not (1 <= stars <= 5):
            return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Заполните все поля"}, ensure_ascii=False)}

        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO reviews (name, stars, text) VALUES (%s, %s, %s) RETURNING id",
            (name, stars, text),
        )
        new_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()
        return {"statusCode": 201, "headers": headers, "body": json.dumps({"id": new_id, "message": "Отзыв отправлен на модерацию"}, ensure_ascii=False)}

    return {"statusCode": 405, "headers": headers, "body": json.dumps({"error": "Method not allowed"}, ensure_ascii=False)}
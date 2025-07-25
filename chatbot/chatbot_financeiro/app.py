from flask import Flask, request, jsonify
import openai
import os
from dotenv import load_dotenv

# Carrega variáveis do .env
load_dotenv()
openai.api_key = os.getenv('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')

# Inicializa o app Flask
app = Flask(__name__)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    if not user_message:
        return jsonify({"error": "Mensagem vazia"}), 400

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Você é um assistente amigável e inteligente."},
                {"role": "user", "content": user_message}
            ]
        )
        reply = response.choices[0].message["content"]
        return jsonify({"reply": reply})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Executa o app localmente
if __name__ == "__main__":
    app.run(debug=True)

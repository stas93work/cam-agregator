import requests, json, time

API_SOURCES = {
    "stripchat": "https://stripchat.com/api/front/v2/models",
    "bongacams": "https://bongacams.com/api/front/v2/models?limit=25",
    "chaturbate": "https://en.chaturbate.com/api/public/affiliates/onlinemodels/?limit=25"
}

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
}

def get_data():
    all_models = []
    for source, url in API_SOURCES.items():
        try:
            resp = requests.get(url, headers=HEADERS, timeout=15)
            if resp.status_code == 200:
                all_models.extend(resp.json())
                print(f"[+] {source}: успешно")
            else:
                print(f"[-] {source}: ошибка {resp.status_code}")
        except Exception as e:
            print(f"[-] {source}: {e}")
        time.sleep(2)
    return all_models

if __name__ == "__main__":
    with open("models.json", "w", encoding="utf-8") as f:
        json.dump(get_data(), f, ensure_ascii=False, indent=4)

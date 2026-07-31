# -*- coding: utf-8 -*-
"""
카카오톡/오픈그래프 링크 미리보기용 대표 이미지 생성.

1200x630 (표준 OG 비율)의 히어로 스타일 배너를 만들어 public/og-image.png로 저장한다.
실제 사이트 히어로 섹션과 같은 문구·톤을 사용하되, 작은 미리보기에서도 잘 보이도록
스크린샷이 아닌 전용 카드로 새로 그린다.

실행: python tools/generate_og_image.py
"""
import os
import random

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_PATH = os.path.join(ROOT, "public", "og-image.png")

FONT_REG = r"C:\Windows\Fonts\malgun.ttf"
FONT_BOLD = r"C:\Windows\Fonts\malgunbd.ttf"

W, H = 1200, 630


def lerp(a, b, t):
    return int(a + (b - a) * t)


def main():
    img = Image.new("RGB", (W, H), "#121315")
    draw = ImageDraw.Draw(img)

    # 브랜드 그라디언트 배경 (좌상단 블루 -> 우하단 잉크블랙)
    top_left = (58, 70, 196)      # #3A46C4
    bottom_right = (18, 19, 21)   # #121315
    for y in range(H):
        ty = y / H
        row_start = (
            lerp(top_left[0], bottom_right[0], ty * 0.6),
            lerp(top_left[1], bottom_right[1], ty * 0.6),
            lerp(top_left[2], bottom_right[2], ty * 0.6),
        )
        row_end = (
            lerp(top_left[0], bottom_right[0], min(1.0, ty * 0.6 + 0.4)),
            lerp(top_left[1], bottom_right[1], min(1.0, ty * 0.6 + 0.4)),
            lerp(top_left[2], bottom_right[2], min(1.0, ty * 0.6 + 0.4)),
        )
        for seg in range(0, W, 4):
            tx = seg / W
            c = tuple(lerp(row_start[i], row_end[i], tx) for i in range(3))
            draw.rectangle([seg, y, seg + 4, y + 1], fill=c)

    # 은은한 점 장식 (좌상단 영역)
    random.seed(3)
    for _ in range(60):
        x = random.randint(0, W)
        y = random.randint(0, int(H * 0.4))
        r = random.randint(1, 3)
        draw.ellipse([x - r, y - r, x + r, y + r], fill=(255, 255, 255, 40))

    f_logo = ImageFont.truetype(FONT_BOLD, 34)
    f_badge = ImageFont.truetype(FONT_REG, 22)
    f_eyebrow = ImageFont.truetype(FONT_BOLD, 24)
    f_headline = ImageFont.truetype(FONT_BOLD, 56)
    f_sub = ImageFont.truetype(FONT_REG, 26)
    f_stat_num = ImageFont.truetype(FONT_BOLD, 34)
    f_stat_label = ImageFont.truetype(FONT_REG, 18)

    margin = 72

    # 로고
    draw.text((margin, 56), "Fact", font=f_logo, fill="#FFFFFF")
    fact_w = draw.textlength("Fact", font=f_logo)
    draw.text((margin + fact_w, 56), "Chat", font=f_logo, fill="#6C92E4")
    chat_w = draw.textlength("Chat", font=f_logo)
    draw.rounded_rectangle(
        [margin + fact_w + chat_w + 14, 60, margin + fact_w + chat_w + 14 + 108, 92],
        radius=13, fill=(255, 255, 255, 30), outline="#8A8F9C",
    )
    draw.text((margin + fact_w + chat_w + 28, 66), "실무교육", font=f_badge, fill="#D1D4DA")

    # eyebrow 배지
    draw.rounded_rectangle([margin, 150, margin + 430, 190], radius=20, outline="#8A8F9C", width=1)
    draw.text((margin + 18, 158), "공공기관 행정주무관 대상 실무교육", font=f_eyebrow, fill="#EAECEF")

    # 헤드라인
    draw.text((margin, 218), "강의는 0분, 실습은 60분.", font=f_headline, fill="#FFFFFF")
    draw.text((margin, 284), "FactChat으로 익히는 행정 실무 자동화", font=f_headline, fill="#94B0EC")

    # 서브카피
    draw.text((margin, 372), "민원 답변 · 회의록 · 보도자료 · 통계 · 조례 검토 · PPT까지", font=f_sub, fill="#D1D4DA")
    draw.text((margin, 406), "여섯 가지 실무 시나리오를 프롬프트 복사 한 번으로 직접 실행", font=f_sub, fill="#D1D4DA")

    # 하단 스탯 바
    draw.line([(margin, 486), (W - margin, 486)], fill=(255, 255, 255, 60), width=1)
    stats = [("60분", "총 교육시간"), ("0분", "이론 강의"), ("6개", "실무 시나리오"), ("7종", "다운로드 자료")]
    slot_w = (W - margin * 2) / len(stats)
    for i, (num, label) in enumerate(stats):
        x = margin + int(slot_w * i)
        draw.text((x, 518), num, font=f_stat_num, fill="#FFFFFF")
        draw.text((x, 566), label, font=f_stat_label, fill="#9499A5")

    img.save(OUT_PATH, "PNG", optimize=True)
    print("OG 이미지 생성:", OUT_PATH, f"{os.path.getsize(OUT_PATH)/1024:.1f} KB", img.size)


if __name__ == "__main__":
    main()

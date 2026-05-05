"""Generate public/og-image.png for IA Academy (1200x630, WhatsApp/OG optimised)."""

from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).parent.parent
PUBLIC = ROOT / "public"
OUT = PUBLIC / "og-image.png"
LOGO_SRC = PUBLIC / "logo-trns.png"

PURPLE_DARK  = (30,  0,  52)
PURPLE_BRAND = (94,  0, 129)
GOLD         = (240, 192, 64)

W, H = 1200, 630

# ── canvas with purple gradient ───────────────────────────────────────────────
img = Image.new("RGBA", (W, H), PURPLE_DARK)
draw = ImageDraw.Draw(img)

for y in range(H):
    t = y / H
    r = int(PURPLE_DARK[0] + (PURPLE_BRAND[0] - PURPLE_DARK[0]) * t * 0.7)
    g = int(PURPLE_DARK[1] + (PURPLE_BRAND[1] - PURPLE_DARK[1]) * t * 0.7)
    b = int(PURPLE_DARK[2] + (PURPLE_BRAND[2] - PURPLE_DARK[2]) * t * 0.7)
    draw.line([(0, y), (W, y)], fill=(r, g, b))

# gold top/bottom bars
draw.rectangle([0, 0, W, 6], fill=GOLD)
draw.rectangle([0, H - 6, W, H], fill=GOLD)

# ── logo centred ─────────────────────────────────────────────────────────────
logo = Image.open(LOGO_SRC).convert("RGBA")
logo_size = 500
logo = logo.resize((logo_size, logo_size), Image.LANCZOS)
logo_x = (W - logo_size) // 2
logo_y = (H - logo_size) // 2
img.paste(logo, (logo_x, logo_y), logo)

# ── save ─────────────────────────────────────────────────────────────────────
img.convert("RGB").save(OUT, "PNG", optimize=True)
print(f"Saved → {OUT}  ({OUT.stat().st_size // 1024} KB)")

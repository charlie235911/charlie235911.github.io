import qrcode

# 你的表單網址
url = "Z:/form/form.html"

# 生成 QR Code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

# 儲存 QR Code 圖片
img = qr.make_image(fill="black", back_color="white")
img.save("qrcode.png")

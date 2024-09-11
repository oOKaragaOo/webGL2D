import pyautogui
from PIL import ImageGrab
import time
def get_mouse_color():

    time.sleep(3)
    # รับตำแหน่งของเมาส์
    x, y = pyautogui.position()
    
    # ถ่ายภาพหน้าจอบริเวณที่ตำแหน่งเมาส์
    screen = ImageGrab.grab(bbox=(x, y, x+1, y+1))
    
    # ดึงค่าสีของพิกเซลที่ตำแหน่ง (0, 0) ในภาพ
    color = screen.getpixel((0, 0))
    
    return color

# เรียกฟังก์ชัน
color_at_mouse = get_mouse_color()
print(f"RGB Color at mouse: {color_at_mouse}")

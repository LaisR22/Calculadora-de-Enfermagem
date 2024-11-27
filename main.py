import tkinter as tk
from tkinter import ttk, messagebox

# Funções da Calculadora
def button_click(number):
    current = display_entry.get()
    display_entry.delete(0, tk.END)
    display_entry.insert(0, current + number)

def clear_display():
    display_entry.delete(0, tk.END)

def button_operation(operator):
    current = display_entry.get()
    display_entry.delete(0, tk.END)
    display_entry.insert(0, current + operator)

def calculate_result():
    try:
        result = eval(display_entry.get())
        display_entry.delete(0, tk.END)
        display_entry.insert(0, result)
    except:
        messagebox.showerror("Erro", "Entrada inválida.")

# Configuração da Interface Gráfica
app = tk.Tk()
app.title("Calculadora")
app.geometry("300x400")

# Display
display_entry = tk.Entry(app, width=20, borderwidth=5)
display_entry.grid(row=0, column=0, columnspan=4, padx=10, pady=10)

# Botões
button_1 = tk.Button(app, text="1", padx=20, pady=20, command=lambda: button_click("1"))
button_2 = tk.Button(app, text="2", padx=20, pady=20, command=lambda: button_click("2"))
button_3 = tk.Button(app, text="3", padx=20, pady=20, command=lambda: button_click("3"))
button_4 = tk.Button(app, text="4", padx=20, pady=20, command=lambda: button_click("4"))
button_5 = tk.Button(app, text="5", padx=20, pady=20, command=lambda: button_click("5"))
button_6 = tk.Button(app, text="6", padx=20, pady=20, command=lambda: button_click("6"))
button_7 = tk.Button(app, text="7", padx=20, pady=20, command=lambda: button_click("7"))
button_8 = tk.Button(app, text="8", padx=20, pady=20, command=lambda: button_click("8"))
button_9 = tk.Button(app, text="9", padx=20, pady=20, command=lambda: button_click("9"))
button_0 = tk.Button(app, text="0", padx=20, pady=20, command=lambda: button_click("0"))
button_dot = tk.Button(app, text=".", padx=20, pady=20, command=lambda: button_click("."))
button_add = tk.Button(app, text="+", padx=20, pady=20, command=lambda: button_operation("+"))
button_subtract = tk.Button(app, text="-", padx=20, pady=20, command=lambda: button_operation("-"))
button_multiply = tk.Button(app, text="*", padx=20, pady=20, command=lambda: button_operation("*"))
button_divide = tk.Button(app, text="/", padx=20, pady=20, command=lambda: button_operation("/"))
button_equal = tk.Button(app, text="=", padx=20, pady=20, command=calculate_result)
button_clear = tk.Button(app, text="C", padx=20, pady=20, command=clear_display)

# Posicionamento dos Botões
button_1.grid(row=1, column=0)
button_2.grid(row=1, column=1)
button_3.grid(row=1, column=2)
button_4.grid(row=2, column=0)
button_5.grid(row=2, column=1)
button_6.grid(row=2, column=2)
button_7.grid(row=3, column=0)
button_8.grid(row=3, column=1)
button_9.grid(row=3, column=2)
button_0.grid(row=4, column=0)
button_dot.grid(row=4, column=1)
button_add.grid(row=1, column=3)
button_subtract.grid(row=2, column=3)
button_multiply.grid(row=3, column=3)
button_divide.grid(row=4, column=3)
button_equal.grid(row=5, column=0, columnspan=2)
button_clear.grid(row=5, column=2, columnspan=2)

# Iniciar o aplicativo
app.mainloop()

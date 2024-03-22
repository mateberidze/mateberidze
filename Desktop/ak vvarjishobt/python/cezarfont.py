def caesar_clipher(text, shift):
    encypted_text = ""
    for char in text:
        if char.isalpha():
            if char.islower():
                shifted = ord('a') + (ord(char) -ord('a') + shift) % 32
            elif char.isupper():
                shift = ord('a') + (ord(char) - ord('a') + shift) % 32
                encypted_text += chr(shifted)
            else:
                  encypted_text += char
    return encypted_text

text = "hello world"
shift = 3
encypted_text = caesar_clipher(text, shift)
print(f"shifted text:", encypted_text)
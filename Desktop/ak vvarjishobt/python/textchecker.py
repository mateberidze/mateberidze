def compare_texts(text1, text2):
    matches = sum(a == b for a, b in zip(text1, text2))
    total_chars = max(len
        (text1), len(text2))
    similarity_ratio = round((matches / total_chars) * 100, 1)
    print(f"similarity of text:{similarity_ratio}%")


text1 = "my name is mate beridze"
text2 = "my name is natalia kharchenko" 
compare_texts(text1, text2)   
def compare_texts(text1, text2):
    matches = sum(a == b for a, b in zip(text1, text2))
    total_chars = max(len(text1), len(text2))
    similarity_ratio = round((matches / total_chars) * 100, 1)
    print(f"similarity of text:{similarity_ratio}%")


text1 = "this text nomber one"
text2 = "this text nomber two" 
compare_texts(text1, text2)   
import torch
import clip
from PIL import Image
from scipy.spatial.distance import cosine

# Initialize CLIP model
device = "cuda" if torch.cuda.is_available() else "cpu"
model, preprocess = clip.load("ViT-B/32", device=device)

def get_clip_embedding(image_path):
    image = preprocess(Image.open(image_path)).unsqueeze(0).to(device)
    with torch.no_grad():
        image_features = model.encode_image(image)
    return image_features.cpu().numpy().flatten()

def get_similarity_score(image_path1, image_path2):
    emb1 = get_clip_embedding(image_path1)
    emb2 = get_clip_embedding(image_path2)
    similarity = 1 - cosine(emb1, emb2)
    return round(similarity, 4)

---
title: "Building Materials Segmentation with U-Nets"
description: "A U-Net segmenting air voids, aggregate, and cement paste in concrete micrographs and predicting a relative height map, trained with active learning and synthetic image compositing."
date: 2024-03-21
featured: true
category: project
tags: ["Computer Vision", "Deep Learning", "Semantic Segmentation"]
image: "/images/projects/building-materials-banner.png"
bannerImage: "/images/projects/building-materials-banner.png"
imageFit: "contain"
---

A TUM practical course project (Deep Learning at Expert Level for Computer Vision and Biomedicine) analyzing polished concrete cross-sections: a U-Net segments each microscope image into air voids, aggregate, and cement paste and predicts a relative height map, with active learning used to prioritize which images were worth the effort of manual labeling.

## Highlights

- Trained a U-Net (6 encoder layers, ~31M parameters) to jointly predict air-void / aggregate / neither segmentation masks and a relative height map from RGB micrographs of polished concrete surfaces.
- Used active learning — least-confidence, margin-confidence, ratio-confidence, and entropy-based uncertainty sampling — to prioritize which images were worth labeling by hand, pushing a simpler aggregate-only classifier from ~98% to >99% accuracy.
- Stretched a small hand-labeled dataset with a procedural image-mixing pipeline: cut-out background, aggregate, and air-void crops were composited into new synthetic samples, generating a matching ground-truth mask for free with every composite.
- Trained the final model on 355 manually corrected, diverse concrete samples (355 train / 63 validation) with color-jitter, flip, rotation, and random-crop augmentation.

---

### Synthetic data generation

<img src="/images/projects/building-materials-method.png" alt="Procedural image-mixing pipeline: cut-out background, aggregate, and air-void crops are composited into a synthetic RGB image with matching air-gap and aggregate masks" class="mx-auto w-full" />

Real labeled micrographs were scarce, so backgrounds, aggregate pieces, and air voids were each cropped from real images into separate pools, then randomly composited back together into new synthetic samples — producing a perfectly labeled RGB image, air-gap mask, and aggregate mask for free with every composite.

### Results

<img src="/images/projects/building-materials-results.png" alt="U-Net output on a concrete micrograph: raw prediction, thresholded prediction, and manually labeled ground truth rows for the air-void, aggregate, neither, combined overlay, and height-map outputs" class="mx-auto w-full" />

The final U-Net takes a raw RGB crop and jointly outputs three segmentation masks (air void, aggregate, neither) plus a relative height map in one pass. Thresholding the raw prediction and comparing it directly against the manually labeled ground truth (bottom row) shows where the model already tracks the label closely versus where boundaries are still blurred out. Uncertainty sampling on the model's least-confident predictions was then used to flag exactly which regions of new, unlabeled images were worth a human correcting by hand, keeping the manual labeling effort focused on the model's actual failure modes rather than spread evenly across the dataset.

---
title: "Building Materials Analysis with U-Nets and GANs"
description: "A U-Net segmenting air voids, aggregate, and cement paste in concrete micrographs and predicting a relative height map, with synthetic training data explored via procedural image mixing and a VAE + DC-GAN."
date: 2024-03-21
featured: true
category: project
tags: ["Computer Vision", "Deep Learning", "Generative AI"]
image: "/images/projects/building-materials-banner.png"
bannerImage: "/images/projects/building-materials-banner.png"
imageFit: "contain"
links:
  writeup: "/building-materials-report.pdf"
---

A TUM practical course project (Deep Learning at Expert Level for Computer Vision and Biomedicine) analyzing polished concrete cross-sections: a U-Net segments each microscope image into air voids, aggregate, and cement paste and predicts a relative height map, with active learning used to prioritize which images were worth the effort of manual labeling.

## Highlights

- Trained a U-Net (6 encoder layers, ~31M parameters) to jointly predict air-void / aggregate / neither segmentation masks and a relative height map from RGB micrographs of polished concrete surfaces.
- Used active learning — least-confidence, margin-confidence, ratio-confidence, and entropy-based uncertainty sampling — to prioritize which images were worth labeling by hand, pushing a simpler aggregate-only classifier from ~98% to >99% accuracy.
- Explored two synthetic-data strategies to stretch a small hand-labeled dataset: procedural image mixing (compositing cut-out background/aggregate/air-void crops into fully labeled synthetic samples) and a VAE + DC-GAN generator trained on ~17K images for 2K epochs. The procedural mixing pipeline transferred usefully to real images; the GAN's output stayed too noisy to be useful.
- Trained the final model on 355 manually corrected, diverse concrete samples (355 train / 63 validation) with color-jitter, flip, rotation, and random-crop augmentation.

---

### Synthetic data generation

<img src="/images/projects/building-materials-method.png" alt="Procedural image-mixing pipeline: cut-out background, aggregate, and air-void crops are composited into a synthetic RGB image with matching air-gap and aggregate masks" class="mx-auto w-full" />

Real labeled micrographs were scarce, so backgrounds, aggregate pieces, and air voids were each cropped from real images into separate pools, then randomly composited back together into new synthetic samples — producing a perfectly labeled RGB image, air-gap mask, and aggregate mask for free with every composite. A separate VAE + DC-GAN was also trained directly on image crops to generate fully synthetic textures, but its output remained too noisy to meaningfully help the segmentation model, so the procedural mixing approach carried the synthetic-data workload instead.

### Results

<img src="/images/projects/building-materials-banner.png" alt="U-Net predictions on two concrete samples: RGB input, air-void/aggregate/neither masks, relative height map, and a combined overlay, compared across two crops" class="mx-auto w-full" />

The final U-Net takes a raw RGB crop and jointly outputs three segmentation masks (air void, aggregate, neither) plus a relative height map in one pass, combined here into a single color overlay per sample. Uncertainty sampling on the trained model's least-confident predictions was then used to flag exactly which regions of new, unlabeled images were worth a human correcting by hand, keeping the manual labeling effort focused on the model's actual failure modes rather than spread evenly across the dataset.

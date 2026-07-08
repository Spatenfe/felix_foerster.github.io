---
title: "STYLO-Pipeline: Semantic Outfit Transformation"
description: "Vision-foundation-model pipeline for virtual try-on and semantic outfit editing — swap backgrounds, generate garments from text, and fit them onto a person with StableVITON."
date: 2025-07-09
featured: true
category: project
tags: ["Computer Vision", "Generative AI", "Virtual Try-On", "Diffusion Models", "Image Editing"]
image: "/images/projects/stylo-pipeline-banner.jpg"
bannerImage: "/images/projects/stylo-pipeline-banner.jpg"
imageFit: "contain"
links:
  github: "https://github.com/weber-andreas/stylo-pipeline"
---

A TUM practical-course project with Andreas Weber, chaining together six public vision foundation models into a single pipeline for virtual try-on and semantic outfit editing: swap out the background and lighting of a photo, select the person to dress, generate a new garment from a text prompt, and fit it onto them — end to end, no manual masking or compositing. The grid above shows the same base photos (top row) redressed in eight different source garments (left column), all produced by the pipeline.

## Highlights

- Orchestrated background generation, person/garment segmentation, lighting harmonization, text-to-garment generation, and virtual fitting into one pipeline built from six separately maintained foundation-model repos (each added as a git submodule against a fork).
- Built and owned the backend serving layer: a WebSocket-based server exposing the pipeline as endpoints (garment choice, garment search, rating, size fitting), with garment-size inference and connection/session handling for concurrent clients.
- Added SLURM cluster support so the pipeline runs on TUM's GPU cluster — allocation scripts and an SSH-forwarding startup script (`run_server.sh`) that let a client connect to a pipeline running on an allocated compute node.
- Worked around integration friction across independently developed foundation models — differing tensor dtypes (a BF16 fix in the background remover), skippable stages, and moving StableVITON's fitting step to run standalone.

---

### How the pipeline fits together

![STYLO-Pipeline architecture: background manipulation, lighting fix, person selection, and garment fit/modify stages](/images/projects/stylo-pipeline-architecture.png)

Each stage is a separately maintained foundation model wired together through a shared image/mask interface: [Yahoo's diffusion background generator](https://github.com/yahoo/photo-background-generation) replaces the scene behind the subject, [Harmonizer](https://github.com/ZHKKKe/Harmonizer/) corrects the resulting lighting mismatch, and person/garment regions are segmented with Meta's [SAM2](https://github.com/facebookresearch/sam2) and [YOLO-11](https://github.com/ultralytics/ultralytics). On the garment side, [LLaVA](https://huggingface.co/llava-hf/llava-1.5-7b-hf) turns a reference image into a text prompt that [Stable Diffusion 3.5](https://github.com/Stability-AI/sd3.5) uses to generate a new garment, which [StableVITON](https://github.com/rlawjdghek/StableVITON) then fits onto the selected person.

### Results

The comparison grid at the top of the page — background swaps across the top row, garment try-ons filling the grid below — is generated on the [VitonHD dataset](https://drive.google.com/file/d/1tLx8LRp-sxDp0EcYmYoV_vXdSc-jJ79w/view), the standard benchmark for high-resolution virtual try-on.

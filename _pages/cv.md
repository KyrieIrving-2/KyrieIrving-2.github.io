---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* M.Sc. (expected), Xiamen University of Technology — Virtual Reality Key Laboratory, 2024 - Present
* Research direction: Computer Vision and Object Tracking

Skills
======
* Programming
  * Python, C++, JavaScript, Shell
* Computer Vision
  * Object Tracking, Object Detection, Semantic Segmentation
* Frameworks
  * PyTorch, YOLOv8/v11, SAM2, GroundingDINO
* Edge Deployment
  * Sophon BM1684/BM1688, BMCV, SAIL
* Tools
  * Git, Docker, CVAT, LabelMe

Projects
======
* Anti-UAV410 Benchmark (2024 - 2026)
  * Large-scale anti-UAV tracking benchmark with 410 sequences
* PPE Detection System (2025 - 2026)
  * Real-time PPE detection on edge devices for construction safety
* ReSeT Tracker (2026 - 2027)
  * Robust spatial-temporal tracking framework for anti-UAV

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

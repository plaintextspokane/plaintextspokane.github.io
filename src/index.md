---
layout: base
title: Plaintext Spokane
---

# Plaintext Spokane

## Sections / Folders

{% for p in collections.allpages %}
  {% if p.fileSlug == "index" and p.inputPath != "src/index.md" %}
  - [{{ p.data.title or p.fileSlug }}]({{ p.url }})
  {% endif %}
{% endfor %}

## Pages at root

{% for p in collections.allpages %}
  {% if p.inputPath contains "/src/" and p.inputPath != "src/index.md" and p.fileSlug != "index" %}
  - [{{ p.data.title or p.fileSlug }}]({{ p.url }})
  {% endif %}
{% endfor %}

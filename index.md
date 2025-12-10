---
layout: default
title: plaintextspokane
---

# Welcome to Plaintext Spokane

## Folders

<ul>
{% assign top_level_pages = "" | split: "" %}
{% for p in site.pages %}
  {% assign segments = p.url | split: '/' %}
  {% if segments.size == 3 and p.url != "/" %}
    {% assign top_level_pages = top_level_pages | push: p %}
  {% endif %}
{% endfor %}

{% for p in top_level_pages %}
  <li><a href="{{ p.url }}">{{ p.title | default: p.basename }}</a></li>
{% endfor %}
</ul>

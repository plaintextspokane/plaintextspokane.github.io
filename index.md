---
layout: default
title: Home
---

# Welcome

## Folders

<ul>
{% assign folders = "" | split: "" %}

{% for p in site.pages %}
  {% assign s = p.url | split: "/" %}

  {% comment %}
    Folder index pages look like:
    /folder/ → ["", "folder", ""]
    So segments.size == 3 AND last segment == ""
  {% endcomment %}
  {% if s.size == 3 and s.last == "" and p.url != "/" %}
    {% assign folders = folders | push: p %}
  {% endif %}
{% endfor %}

{% for f in folders %}
  <li>
    <a href="{{ f.url }}">{{ f.title | default: f.basename }}</a>
  </li>
{% endfor %}
</ul>

---

## Pages in this folder

<ul>
{% assign root_pages = "" | split: "" %}

{% for p in site.pages %}
  {% assign s = p.url | split: "/" %}

  {% comment %}
    Root-level pages:
    /page/ → ["", "page", ""]
    AND the file is physically at root (path contains no folder)
  {% endcomment %}
  {% if s.size == 3 and p.path contains "/" == false %}
    {% assign root_pages = root_pages | push: p %}
  {% endif %}
{% endfor %}

{% for p in root_pages %}
  <li><a href="{{ p.url }}">{{ p.title | default: p.basename }}</a></li>
{% endfor %}
</ul>

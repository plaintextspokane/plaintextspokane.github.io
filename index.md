---
layout: default
title: plaintextspokane
---

# Welcome

## Folders

<ul>
{% for p in site.pages %}
  {% if p.name == "index.md" and p.dir != "/" %}
    <li><a href="{{ p.url }}">{{ p.title | default: p.dir | remove: '/' }}</a></li>
  {% endif %}
{% endfor %}
</ul>

## Pages (at the site root)

<ul>
{% for p in site.pages %}
  {% if p.dir == "/" and p.name != "index.md" %}
    <li><a href="{{ p.url }}">{{ p.title | default: p.name | replace: '.md','' }}</a></li>
  {% endif %}
{% endfor %}
</ul>

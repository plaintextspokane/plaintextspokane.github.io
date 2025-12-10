---
layout: default
title: City
---
## Pages in this folder

<ul>
{% for p in site.pages %}
  {% if p.dir == page.dir and p.name != "index.md" %}
    <li><a href="{{ p.url }}">{{ p.title | default: p.name | replace: '.md','' }}</a></li>
  {% endif %}
{% endfor %}
</ul>

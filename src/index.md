---
layout: default
title: plaintextspokane
---

# Welcome to Plaintext Spokane

## Pages

<ul>
{% for p in site.pages %}
  {% if p.title and p.url != "/" %}
    <li><a href="{{ p.url }}">{{ p.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

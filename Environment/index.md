---
layout: default
title: Environment
---
**{{ page.title }}**

<ul>
{% for p in site.pages %}
  {% if p.dir == page.dir and p.name != "index.md" %}
    <li><a href="{{ p.url }}">{{ p.title | default: p.name | replace: '.md',''| replace: '-',' ' | capitalize }}</a></li>
  {% endif %}
{% endfor %}
</ul>

Some Local Advocacy Groups
<ul>
<li><a href="https://www.350spokane.org/" target="_blank">350 Spokane ↑</a> is the local chapter of the 350 organization which is a volunteer-lead non-profit doing climate change work in the region.</li> 
<li><a href="https://www.spokaneriverkeeper.org/who-we-are" target="_blank">Spokane Riverkeeper ↑</a> is a non-profit that advocates for the Spokane River and its watershed.</li>
<li><a href="https://landscouncil.org/mission" target="_blank">The Lands Council ↑</a> is a non-profit that works to preserve and protect the land, water, and wildlife of the Inland Northwest.</li> 
</ul>

---
title: About
layout: page
---
![Profile Image]({% if site.external-image %}{{ site.picture }}{% else %}{{ site.url }}/{{ site.picture }}{% endif %})

<p>
  {% if site.aboutme != null %}
    {{site.aboutme }}
  {% endif%}
</p>

<h2>Skills</h2>

<ul class="skill-list">

  {% for item in site.skills %}
		<li>{{ item }}</li>
	{% endfor %}

</ul>

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('defaultapp', '0002_librarybook_count'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='publishinghouse',
            name='address',
        ),
    ]

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('defaultapp', '0003_remove_publishinghouse_address'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='library',
            name='address',
        ),
        migrations.AddField(
            model_name='publishinghouse',
            name='address',
            field=models.ForeignKey(blank=True, to='defaultapp.Address', null=True),
        ),
    ]

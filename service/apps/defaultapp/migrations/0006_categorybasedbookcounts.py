# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('defaultapp', '0005_auto_20170122_1737'),
    ]

    operations = [
        migrations.CreateModel(
            name='CategoryBasedBookCounts',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
            ],
            options={
                'db_table': 'view_category_based_book_counts',
                'managed': False,
            },
        ),
    ]

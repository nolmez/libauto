# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('address', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
                ('state', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=100)),
                ('zip_code', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'address',
            },
        ),
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'author',
            },
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('publication_year', models.IntegerField()),
                ('number_of_pages', models.IntegerField()),
                ('isbn', models.CharField(unique=True, max_length=50)),
                ('authors', models.ManyToManyField(to='defaultapp.Author')),
            ],
            options={
                'db_table': 'book',
            },
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=100)),
            ],
            options={
                'db_table': 'category',
            },
        ),
        migrations.CreateModel(
            name='Library',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=100)),
                ('address', models.ForeignKey(to='defaultapp.Address')),
            ],
            options={
                'db_table': 'library',
            },
        ),
        migrations.CreateModel(
            name='LibraryBook',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('book', models.ForeignKey(to='defaultapp.Book')),
                ('library', models.ForeignKey(to='defaultapp.Library')),
            ],
            options={
                'db_table': 'library_book',
            },
        ),
        migrations.CreateModel(
            name='PublishingHouse',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('address', models.ForeignKey(blank=True, to='defaultapp.Address', null=True)),
            ],
            options={
                'db_table': 'publishing_house',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('mail', models.CharField(max_length=100)),
                ('phone_number', models.CharField(max_length=100)),
                ('gender', models.CharField(max_length=100)),
                ('address', models.ForeignKey(to='defaultapp.Address')),
            ],
            options={
                'db_table': 'user',
            },
        ),
        migrations.AddField(
            model_name='book',
            name='categories',
            field=models.ManyToManyField(to='defaultapp.Category'),
        ),
        migrations.AddField(
            model_name='book',
            name='publishing_house',
            field=models.ForeignKey(to='defaultapp.PublishingHouse'),
        ),
    ]

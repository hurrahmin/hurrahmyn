# Generated by Django 3.2.7 on 2023-04-12 07:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0003_hashtag'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='hashtags',
            field=models.ManyToManyField(blank=True, to='movies.Hashtag'),
        ),
    ]

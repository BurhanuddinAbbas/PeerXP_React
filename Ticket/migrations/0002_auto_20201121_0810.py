# Generated by Django 2.2.8 on 2020-11-21 02:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Ticket', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ticket',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='categories', to='Ticket.Category'),
        ),
        migrations.AlterField(
            model_name='ticket',
            name='department',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='departments', to='Ticket.Department'),
        ),
        migrations.AlterField(
            model_name='ticket',
            name='priority',
            field=models.IntegerField(choices=[(1, 'HIGH - Production System Down'), (2, 'MED - System Impaired'), (3, 'LOW - General Guidence')], null=True),
        ),
    ]

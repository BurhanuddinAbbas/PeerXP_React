from enum import Enum
from django.db import models

PRIORITIES = Enum(
    value='PRIORITIES',
    names=[
        ('HIGH - Production System Down', 1),
        ('MED - System Impaired', 2),
        ('LOW - General Guidence', 3),
    ])

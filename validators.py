import re
import constants as const
from django.core.exceptions import ValidationError
from PIL import Image
import os

def validation_image(max_width, max_height):
    def _validate_image(image):
        allowed_formats = ['.png', '.jpeg', '.jpg']
        if not os.path.splitext(image.name)[1] in allowed_formats:
            raise ValidationError("Only png/jpg images are supported")

        width, height = Image.open(image).size
        if width != max_width or height != max_height:
            raise ValidationError("Allowed resolution : width/height = " + str(max_width) + "/" + str(max_height))

    return _validate_image


def gender_validator(gender):
    """
    Validate gender values (M , F , O)
    :param gender:
    :return:
    """
    return True if gender in const.Gender._member_names is True else False


def address_validator(value):
    """
    :param value:
    :return:
    """
    pattern = r"^[a-zA-Z0-9\s,.'-#]{3,}$"
    if not re.fullmatch(pattern=pattern, string=value):
        pass
#         raise ValidationError('This is not a valid Address')


def password_validator(value):
    """

    :param value:
    :return:
    """
    pattern = r"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,50}$"
    if re.fullmatch(pattern=pattern, string=value) is None:
        raise ValidationError('This is not a valid password')


def city_validator(value):
    """

    :param value:
    :return:
    """
    pattern = r"^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
    if re.fullmatch(pattern=pattern, string=value) is None:
        raise ValidationError('This is not a city')


def mobile_no_validator(value):
    """

    :param value:
    :return:
    """
    pattern = r"^[6-9]\d{9}$"
    if re.fullmatch(pattern=pattern, string=str(value)) is None:
        raise ValidationError('This is not a valid mobile number')


def dob_validator(value):
    """

    :param value:
    :return:
    """
    pattern = r"^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$"
    if re.fullmatch(pattern=pattern, string=value) is None:
        raise ValidationError('This is not a valid date of birth')


def email_validator(value):
    """

    :param value:
    :return:
    """
    pattern = r"^[^\s@]+@[^\s@]+\.[^\s@]+$"
    if re.fullmatch(pattern=pattern, string=value) is None:
        raise ValidationError('This is not a valid email')


def pincode_validator(value):
    """

    :return:
    """
    pattern = r"^[1-9][0-9]{5}$"
    if re.findall(pattern=pattern, string=value) is None:
        raise ValidationError('This is not a valid pincode number')


def addon_name_validator(value):
    """

    :param value:
    :return:
    """
    pattern = r"^[A-Za-z0-9\s/]{1,}[\.]{0,1}[A-Za-z0-9\s/]{3,}$"
    if not re.findall(pattern=pattern, string=value):
        raise ValidationError('This is not a valid name')


def name_validator(value):
    """

    :param value:
    :return:
    """
    pattern = r"^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{3,}$"
    if not re.findall(pattern=pattern, string=value):
        raise ValidationError('This is not a valid name')


def hsn_validator(value):
    """

    :param value:
    :return:
    """
    pattern = r"^[a-zA-Z0-9\s]{3,8}$"
    if not re.fullmatch(pattern=pattern, string=value):
        raise ValidationError('This is not a valid HSN number')


def city_name_validator(value):
    """

    :param value:
    :return:
    """
    pattern = r"^[a-zA-Z\s-]{2,12}$"
    if not re.fullmatch(pattern=pattern, string=value):
        raise ValidationError('This is not a valid city name')


def pan_number_validator(value):
    """

    :param value:
    :return:
    """
    pattern = r"^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$"
    if re.fullmatch(pattern=pattern, string=value) is None:
        raise ValidationError('This is not a valid pan number')


def gst_no_validator(value):
    """

    :param value:
    :return:
    """
    pattern = r"\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}"
    if re.fullmatch(pattern=pattern, string=value) is None:
        raise ValidationError('This is not a valid gst number')


def location_coordinates_validator(value):
    """

    :param value:
    :return:
    """
    pattern = r"^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$"
    if re.fullmatch(pattern=pattern, string=str(value)) is None:
        raise ValidationError('This is not a valid Location Coordinates')


def combo_mobile_email(value):
    """
    Combined mobile or email validator
    :param value:
    :return:
    """

    # first call mobile validator
    try:
        # check if given data is mobile number
        mobile_no_validator(value=value)
        # if found mobile than return
        return 'mobile'
    # else call email validator or handle if mobile number is wrong
    except ValidationError:
        try:
            # check if given data is email id
            email_validator(value=value)
            # if given data found to be email than return
            return 'email'
        except ValidationError:
            raise ValidationError('email or mobile number is invalid')

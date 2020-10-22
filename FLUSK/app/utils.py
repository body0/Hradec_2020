import unidecode


def strip_accents(string):
    return unidecode.unidecode(string)

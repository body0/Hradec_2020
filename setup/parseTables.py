import pandas as pd
import unidecode


def strip_accents(string):
    return unidecode.unidecode(string)


if __name__ == '__main__':
    pop = pd.read_excel('./populace.xlsx', names=['LAU_1', 'LAU_2',
                                                    'nazev_obce', 'obyv_celkem',
                                                    'obyv_muzi', 'obyv_zeny',
                                                    'vek_celkem', 'vek_muzi', 'vek_zeny'])\
            .dropna()
    # pop['nazev_obce'] = pop['nazev_obce'].apply(strip_accents)
    pop.to_csv('./population.csv')

    mestske_casti = pd.read_csv('obce/mestske-casti.csv', sep=';')
    obec = pd.read_csv('obce/obec.csv', sep=';')
    pripady = pd.concat([obec, mestske_casti], axis=0)[['datum', 'obec_kod', 'nove_pripady', 'aktualne_nemocnych']].fillna(0).reset_index(drop=True)
    pripady['obec_kod'] = pripady['obec_kod'].astype('int')
    pripady.to_csv('./cases.csv')

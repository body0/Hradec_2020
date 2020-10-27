import pandas as pd
from datetime import datetime

if __name__ == '__main__':
    mestske_casti = pd.read_csv('obce/mestske-casti.csv', sep=';')
    mc = mestske_casti[pd.to_datetime(mestske_casti['datum']) >= datetime.today() - pd.to_timedelta("3day")]
    obec = pd.read_csv('obce/obec.csv', sep=';')
    oc = obec[pd.to_datetime(obec['datum']) >= datetime.now() - pd.to_timedelta("3day")]
    pripady = pd.concat([oc, mc], axis=0)[['datum', 'obec_kod', 'nove_pripady', 'aktualne_nemocnych']].fillna(0).reset_index(drop=True)
    pripady['obec_kod'] = pripady['obec_kod'].astype('int')
    pripady.to_csv('./casesNew.csv', index=False)

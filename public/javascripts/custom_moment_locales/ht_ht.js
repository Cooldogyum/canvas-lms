// Custom moment.js locale for Haitian Creole

import moment from 'moment'

export default moment.defineLocale('ht-ht', {
  months : 'janvye_fevriye_mas_avril_me_jen_jiyè_out_septanm_oktòb_novanm_desanm'.split('_'),
  monthsShort : 'jan_fev_mas_avr_me_jen_jiy_out_sep_okt_nov_des'.split('_'),
  weekdays : 'dimanch_lendi_madi_mèkredi_jedi_vandredi_samdi'.split('_'),
  weekdaysShort : 'dim_len_mad_mèk_jed_van_sam'.split('_'),
  weekdaysMin : 'di_le_ma_mè_je_va_sa'.split('_'),
  longDateFormat : {
    LT : 'HH:mm',
    LTS : 'HH:mm:ss',
    L : 'DD/MM/YYYY',
    LL : 'D MMMM YYYY',
    LLL : 'D MMMM YYYY HH:mm',
    LLLL : 'dddd, D MMMM YYYY HH:mm'
  },
  calendar : {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
  },
  relativeTime : {
    future : 'in %s',
    past : '%s ago',
    s : 'a few seconds',
    m : 'a minute',
    mm : '%d minutes',
    h : 'an hour',
    hh : '%d hours',
    d : 'a day',
    dd : '%d days',
    M : 'a month',
    MM : '%d months',
    y : 'a year',
    yy : '%d years'
  },
  ordinalParse: /\d{1,2}º/,
  ordinal: '%dº',
  week : {
    dow : 1, // Monday is the first day of the week.
  }

})

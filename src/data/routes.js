// 路线数据
export const routesData = [
  {
    id: 'osaka_to_kyoto',
    name: '大阪到京都',
    from: 'osaka_hotel',
    to: 'nijo_castle',
    description: '搭乘JR线从大阪前往京都（约30分钟车程）。',
    tips: '建议使用ICOCA卡或关西周游卡。'
  },
  {
    id: 'kyoto_to_osaka',
    name: '京都到大阪',
    from: 'kyoto_station_dinner',
    to: 'osaka_hotel',
    description: '乘坐JR线返回大阪入住酒店。',
    tips: '最晚一班车通常在午夜前，请注意时间。'
  },
  {
    id: 'osaka_to_nara',
    name: '大阪到奈良',
    from: 'osaka_hotel',
    to: 'nara_park',
    description: '从大阪乘坐近铁或JR线前往奈良（约45分钟）。',
    tips: '近铁比JR更方便到达奈良公园。'
  },
  {
    id: 'nara_to_kyoto',
    name: '奈良到京都岚山',
    from: 'nara_lunch',
    to: 'arashiyama',
    description: '从奈良返回京都，前往岚山地区。',
    tips: '可能需要在京都站转车，总行程约1.5小时。'
  },
  {
    id: 'osaka_to_airport',
    name: '大阪到关西机场',
    from: 'shinsaibashi',
    to: 'kansai_airport',
    description: '从大阪市区前往关西国际机场（需预留约1.5小时交通时间）。',
    tips: '可以乘坐关西机场特急"HARUKA"列车或南海电铁"Rapi:t"特急列车。'
  }
];
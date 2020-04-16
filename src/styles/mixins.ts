interface deviceType {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
}

const size: any = {
  mobileS: '320',
  mobileM: '375',
  mobileL: '425',
  tablet: '768',
  laptop: '1024',
  laptopL: '1440',
  desktop: '2560',
};

export const device: deviceType = Object.keys(size).reduce((acc: any, cur: any) => {
  acc[cur] = `(max-width: ${size[cur]}px)`;
  return acc;
}, {});

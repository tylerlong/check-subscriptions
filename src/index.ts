import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  server: 'https://platform.ringcentral.com',
});

rc.token = {access_token: process.env.ACCESS_TOKEN};

const main = async () => {
  // const extInfo = await rc.restapi().account().extension().get();
  // console.log(JSON.stringify(extInfo, null, 2));
  const subs = await rc.restapi().subscription().list();
  console.log(JSON.stringify(subs, null, 2));
};

main();

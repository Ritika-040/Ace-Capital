import algoliasearch from 'algoliasearch';

const client = algoliasearch('T83XSFFJSH', 'f21884a0c8dc3374737400e9ae4bfc59');
const index = client.initIndex('dev_ritikasharma');

export default index;

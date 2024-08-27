import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';

export const CHAIN_NAME = 'cudos';

export const chainassets: AssetList = assets.find(
    (chain) => chain.chain_name === CHAIN_NAME
) as AssetList;

export const coin: Asset = chainassets.assets.find(
    (asset) => asset.base === 'acudos'
) as Asset;
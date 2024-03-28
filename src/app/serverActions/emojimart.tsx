'use server'

import data from '@emoji-mart/data';
import { init, SearchIndex } from 'emoji-mart';

export default async function getEmoji(keyword : string) {
    init({data})
    try {
        const emojis = await SearchIndex.search(keyword);
        const results = await emojis.map((emoji: any) => emoji.skins[0].native);
        return results[0];
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
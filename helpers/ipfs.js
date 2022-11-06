import { NFTStorage } from "nft.storage";
import axios from "axios";

const nftstorage = new NFTStorage({
    token: process.env.NEXT_PUBLIC_NFT_STORAGE,
});

export default async function fileFromPath(title, filePath, properties, cb) {
    const reader = new window.FileReader();
    let blob = await fetch(filePath).then((r) => r.blob());
    reader.readAsDataURL(blob);
    reader.onloadend = async () => {
        let fileData = Buffer.from(reader.result);
        let filename = filePath.split("/").at(-1);
        let image = new File([fileData], filename, {
            type: blob.type,
        });

        let result = await nftstorage.store({
            image,
            name: title,
            description: properties.description,
            properties,
        });

        cb(result);
    };
}

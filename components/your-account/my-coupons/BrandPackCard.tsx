// components/BrandPackCard.tsx
import Image from 'next/image';

interface BrandPackCardProps {
    name: string;
    discount: string;
    coupons: string;
    validity: string;
    imageUrl: string;
}

const BrandPackCard: React.FC<BrandPackCardProps> = ({ name, discount, coupons, validity, imageUrl }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <Image src={imageUrl} alt={name} width={400} height={300} className="rounded-lg" />
            <h2 className="text-xl font-bold mt-2">{name}</h2>
            <p className="text-green-600 mt-1">{discount}</p>
            <p className="text-red-600 mt-1">{coupons}</p>
            <p className="text-gray-500 mt-1">{validity}</p>
        </div>
    );
};

export default BrandPackCard;

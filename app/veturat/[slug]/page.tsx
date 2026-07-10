import{notFound}from"next/navigation";import VehicleDetailClient from"@/components/VehicleDetailClient";import{carBySlug,cars}from"@/data/cars";
export function generateStaticParams(){return cars.map(car=>({slug:car.slug}))}
export default async function VehiclePage({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const car=carBySlug(slug);if(!car)notFound();const similar=cars.filter(c=>c.slug!==car.slug).slice(0,3);return <VehicleDetailClient car={car} similar={similar}/>}

import { getCollection } from 'astro:content';

export async function get({ params }) {
  const { id } = params;
  const overlays = await getCollection('overlay');
  const overlay = overlays.find((overlay) => overlay.id === id);

  if (!overlay) {
    return {
      status: 404,
      body: { error: 'Overlay not found' }
    };
  }

  return {
    body: overlay.data,
  };
}

export const uploadOnCloudinary = async (file: File) => {
  const sigRes = await fetch('/api/sign-upload');
  const { signature, timestamp, apiKey, cloudName } = await sigRes.json();

  const formData = new FormData();
  formData.append('file', file);
  formData.append('api_key', apiKey);
  formData.append('timestamp', timestamp);
  formData.append('signature', signature);

  const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
    method: 'POST',
    body: formData,
  });

  return await uploadRes.json(); // contains secure_url, public_id, etc.
};

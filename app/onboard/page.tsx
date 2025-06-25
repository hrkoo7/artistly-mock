"use client";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import MultiSelect from "../../components/MultiSelect";

type FormData = {
  name: string;
  bio: string;
  categories: string[];
  languages: string[];
  fee: string;
  location: string;
};

const schema: yup.ObjectSchema<FormData> = yup.object({
  name: yup.string().required(),
  bio: yup.string().required(),
  categories: yup.array().of(yup.string().required()).min(1).required(),
  languages: yup.array().of(yup.string().required()).min(1).required(),
  fee: yup.string().required(),
  location: yup.string().required(),
});


export default function Onboard() {
  const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 shadow rounded-lg border border-gray-200 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input {...register("name")} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-400" />
        {errors.name && <p className="text-red-600">Required</p>}
      </div>

      <div>
        <label>Bio</label>
        <textarea {...register("bio")} className="w-full border p-2 rounded" />
        {errors.bio && <p className="text-red-600">Required</p>}
      </div>

      <Controller name="categories" control={control} render={({ field }) => (
        <div>
          <label>Category</label>
          <MultiSelect
            options={[
              { label: "Singer", value: "Singer" },
              { label: "Dancer", value: "Dancer" },
              { label: "Speaker", value: "Speaker" },
              { label: "DJ", value: "DJ" }
            ]}
            value={field.value || []}
            onChange={field.onChange}
          />
          {errors.categories && <p className="text-red-600">Select at least one.</p>}
        </div>
      )} />

      <Controller name="languages" control={control} render={({ field }) => (
        <div>
          <label>Languages Spoken</label>
          <MultiSelect
            options={[
              { label: "English", value: "EN" },
              { label: "Spanish", value: "ES" },
              { label: "Hindi", value: "HI" }
            ]}
            value={field.value || []}
            onChange={field.onChange}
          />
          {errors.languages && <p className="text-red-600">Select at least one.</p>}
        </div>
      )} />

      <div>
        <label>Fee Range</label>
        <select {...register("fee")} className="w-full border p-2 rounded">
          <option value="">Select</option>
          <option>$300–$700</option>
          <option>$500–$1,000</option>
          <option>$1,000–$2,000</option>
        </select>
        {errors.fee && <p className="text-red-600">Required</p>}
      </div>

      <div>
        <label>Location</label>
        <input {...register("location")} className="w-full border p-2 rounded" />
        {errors.location && <p className="text-red-600">Required</p>}
      </div>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}

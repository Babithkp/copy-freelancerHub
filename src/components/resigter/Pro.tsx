"use client";import Button from "@/components/button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, {  useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "@/lib/firebase";
import { toast } from "react-toastify";
import { VscLoading } from "react-icons/vsc";
import { addUserIdentity } from "@/lib/api/fetch";

type Inputs = {
  profileUrl: string;
  ScreenName: string;
  address: string;
  country: string;
  street: string;
  city: string;
  state: string;
  postalCode: String;
  neigborhood: string;
  user: string;
};

const countryOptions = [
  { value: "Afghanistan", label: "Afghanistan" },
  { value: "Åland Islands", label: "Åland Islands" },
  { value: "Albania", label: "Albania" },
  { value: "Algeria", label: "Algeria" },
  { value: "American Samoa", label: "American Samoa" },
  { value: "Andorra", label: "Andorra" },
  { value: "Angola", label: "Angola" },
  { value: "Anguilla", label: "Anguilla" },
  { value: "Antarctica", label: "Antarctica" },
  { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
  { value: "Argentina", label: "Argentina" },
  { value: "Armenia", label: "Armenia" },
  { value: "Aruba", label: "Aruba" },
  { value: "Australia", label: "Australia" },
  { value: "Austria", label: "Austria" },
  { value: "Azerbaijan", label: "Azerbaijan" },
  { value: "Bahamas", label: "Bahamas" },
  { value: "Bahrain", label: "Bahrain" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "Barbados", label: "Barbados" },
  { value: "Belarus", label: "Belarus" },
  { value: "Belgium", label: "Belgium" },
  { value: "Belize", label: "Belize" },
  { value: "Benin", label: "Benin" },
  { value: "Bermuda", label: "Bermuda" },
  { value: "Bhutan", label: "Bhutan" },
  { value: "Bolivia", label: "Bolivia" },
  { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
  { value: "Botswana", label: "Botswana" },
  { value: "Bouvet Island", label: "Bouvet Island" },
  { value: "Brazil", label: "Brazil" },
  {
    value: "British Indian Ocean Territory",
    label: "British Indian Ocean Territory",
  },
  { value: "Brunei Darussalam", label: "Brunei Darussalam" },
  { value: "Bulgaria", label: "Bulgaria" },
  { value: "Burkina Faso", label: "Burkina Faso" },
  { value: "Burundi", label: "Burundi" },
  { value: "Cambodia", label: "Cambodia" },
  { value: "Cameroon", label: "Cameroon" },
  { value: "Canada", label: "Canada" },
  { value: "Cape Verde", label: "Cape Verde" },
  { value: "Cayman Islands", label: "Cayman Islands" },
  { value: "Central African Republic", label: "Central African Republic" },
  { value: "Chad", label: "Chad" },
  { value: "Chile", label: "Chile" },
  { value: "China", label: "China" },
  { value: "Christmas Island", label: "Christmas Island" },
  { value: "Cocos (Keeling) Islands", label: "Cocos (Keeling) Islands" },
  { value: "Colombia", label: "Colombia" },
  { value: "Comoros", label: "Comoros" },
  { value: "Congo", label: "Congo" },
  {
    value: "Congo, The Democratic Republic of The",
    label: "Congo, The Democratic Republic of The",
  },
  { value: "Cook Islands", label: "Cook Islands" },
  { value: "Costa Rica", label: "Costa Rica" },
  { value: "Cote D'ivoire", label: "Cote D'ivoire" },
  { value: "Croatia", label: "Croatia" },
  { value: "Cuba", label: "Cuba" },
  { value: "Curaçao", label: "Curaçao" },
  { value: "Cyprus", label: "Cyprus" },
  { value: "Czech Republic", label: "Czech Republic" },
  { value: "Denmark", label: "Denmark" },
  { value: "Djibouti", label: "Djibouti" },
  { value: "Dominica", label: "Dominica" },
  { value: "Dominican Republic", label: "Dominican Republic" },
  { value: "Ecuador", label: "Ecuador" },
  { value: "Egypt", label: "Egypt" },
  { value: "El Salvador", label: "El Salvador" },
  { value: "Equatorial Guinea", label: "Equatorial Guinea" },
  { value: "Eritrea", label: "Eritrea" },
  { value: "Estonia", label: "Estonia" },
  { value: "Ethiopia", label: "Ethiopia" },
  {
    value: "Falkland Islands (Malvinas)",
    label: "Falkland Islands (Malvinas)",
  },
  { value: "Faroe Islands", label: "Faroe Islands" },
  { value: "Fiji", label: "Fiji" },
  { value: "Finland", label: "Finland" },
  { value: "France", label: "France" },
  { value: "French Guiana", label: "French Guiana" },
  { value: "French Polynesia", label: "French Polynesia" },
  {
    value: "French Southern Territories",
    label: "French Southern Territories",
  },
  { value: "Gabon", label: "Gabon" },
  { value: "Gambia", label: "Gambia" },
  { value: "Georgia", label: "Georgia" },
  { value: "Germany", label: "Germany" },
  { value: "Ghana", label: "Ghana" },
  { value: "Gibraltar", label: "Gibraltar" },
  { value: "Greece", label: "Greece" },
  { value: "Greenland", label: "Greenland" },
  { value: "Grenada", label: "Grenada" },
  { value: "Guadeloupe", label: "Guadeloupe" },
  { value: "Guam", label: "Guam" },
  { value: "Guatemala", label: "Guatemala" },
  { value: "Guernsey", label: "Guernsey" },
  { value: "Guinea", label: "Guinea" },
  { value: "Guinea-bissau", label: "Guinea-bissau" },
  { value: "Guyana", label: "Guyana" },
  { value: "Haiti", label: "Haiti" },
  {
    value: "Heard Island and Mcdonald Islands",
    label: "Heard Island and Mcdonald Islands",
  },
  {
    value: "Holy See (Vatican City State)",
    label: "Holy See (Vatican City State)",
  },
  { value: "Honduras", label: "Honduras" },
  { value: "Hong Kong", label: "Hong Kong" },
  { value: "Hungary", label: "Hungary" },
  { value: "Iceland", label: "Iceland" },
  { value: "India", label: "India" },
  { value: "Indonesia", label: "Indonesia" },
  { value: "Iran, Islamic Republic of", label: "Iran, Islamic Republic of" },
  { value: "Iraq", label: "Iraq" },
  { value: "Ireland", label: "Ireland" },
  { value: "Isle of Man", label: "Isle of Man" },
  { value: "Israel", label: "Israel" },
  { value: "Italy", label: "Italy" },
  { value: "Jamaica", label: "Jamaica" },
  { value: "Japan", label: "Japan" },
  { value: "Jersey", label: "Jersey" },
  { value: "Jordan", label: "Jordan" },
  { value: "Kazakhstan", label: "Kazakhstan" },
  { value: "Kenya", label: "Kenya" },
  { value: "Kiribati", label: "Kiribati" },
  {
    value: "Korea, Democratic People's Republic of",
    label: "Korea, Democratic People's Republic of",
  },
  { value: "Korea, Republic of", label: "Korea, Republic of" },
  { value: "Kuwait", label: "Kuwait" },
  { value: "Kyrgyzstan", label: "Kyrgyzstan" },
  {
    value: "Lao People's Democratic Republic",
    label: "Lao People's Democratic Republic",
  },
  { value: "Latvia", label: "Latvia" },
  { value: "Lebanon", label: "Lebanon" },
  { value: "Lesotho", label: "Lesotho" },
  { value: "Liberia", label: "Liberia" },
  { value: "Libyan Arab Jamahiriya", label: "Libyan Arab Jamahiriya" },
  { value: "Liechtenstein", label: "Liechtenstein" },
  { value: "Lithuania", label: "Lithuania" },
  { value: "Luxembourg", label: "Luxembourg" },
  { value: "Macao", label: "Macao" },
  {
    value: "Macedonia, The Former Yugoslav Republic of",
    label: "Macedonia, The Former Yugoslav Republic of",
  },
  { value: "Madagascar", label: "Madagascar" },
  { value: "Malawi", label: "Malawi" },
  { value: "Malaysia", label: "Malaysia" },
  { value: "Maldives", label: "Maldives" },
  { value: "Mali", label: "Mali" },
  { value: "Malta", label: "Malta" },
  { value: "Marshall Islands", label: "Marshall Islands" },
  { value: "Martinique", label: "Martinique" },
  { value: "Mauritania", label: "Mauritania" },
  { value: "Mauritius", label: "Mauritius" },
  { value: "Mayotte", label: "Mayotte" },
  { value: "Mexico", label: "Mexico" },
  {
    value: "Micronesia, Federated States of",
    label: "Micronesia, Federated States of",
  },
  { value: "Moldova, Republic of", label: "Moldova, Republic of" },
  { value: "Monaco", label: "Monaco" },
  { value: "Mongolia", label: "Mongolia" },
  { value: "Montenegro", label: "Montenegro" },
  { value: "Montserrat", label: "Montserrat" },
  { value: "Morocco", label: "Morocco" },
  { value: "Mozambique", label: "Mozambique" },
  { value: "Myanmar", label: "Myanmar" },
  { value: "Namibia", label: "Namibia" },
  { value: "Nauru", label: "Nauru" },
  { value: "Nepal", label: "Nepal" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "New Caledonia", label: "New Caledonia" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "Nicaragua", label: "Nicaragua" },
  { value: "Niger", label: "Niger" },
  { value: "Nigeria", label: "Nigeria" },
  { value: "Niue", label: "Niue" },
  { value: "Norfolk Island", label: "Norfolk Island" },
  { value: "Northern Mariana Islands", label: "Northern Mariana Islands" },
  { value: "Norway", label: "Norway" },
  { value: "Oman", label: "Oman" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "Palau", label: "Palau" },
  {
    value: "Palestinian Territory, Occupied",
    label: "Palestinian Territory, Occupied",
  },
  { value: "Panama", label: "Panama" },
  { value: "Papua New Guinea", label: "Papua New Guinea" },
  { value: "Paraguay", label: "Paraguay" },
  { value: "Peru", label: "Peru" },
  { value: "Philippines", label: "Philippines" },
  { value: "Pitcairn", label: "Pitcairn" },
  { value: "Poland", label: "Poland" },
  { value: "Portugal", label: "Portugal" },
  { value: "Puerto Rico", label: "Puerto Rico" },
  { value: "Qatar", label: "Qatar" },
  { value: "Reunion", label: "Reunion" },
  { value: "Romania", label: "Romania" },
  { value: "Russia", label: "Russia" },
  { value: "Rwanda", label: "Rwanda" },
  { value: "Saint Helena", label: "Saint Helena" },
  { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
  { value: "Saint Lucia", label: "Saint Lucia" },
  { value: "Saint Pierre and Miquelon", label: "Saint Pierre and Miquelon" },
  {
    value: "Saint Vincent and The Grenadines",
    label: "Saint Vincent and The Grenadines",
  },
  { value: "Samoa", label: "Samoa" },
  { value: "San Marino", label: "San Marino" },
  { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
  { value: "Saudi Arabia", label: "Saudi Arabia" },
  { value: "Senegal", label: "Senegal" },
  { value: "Serbia", label: "Serbia" },
  { value: "Seychelles", label: "Seychelles" },
  { value: "Sierra Leone", label: "Sierra Leone" },
  { value: "Singapore", label: "Singapore" },
  { value: "Slovakia", label: "Slovakia" },
  { value: "Slovenia", label: "Slovenia" },
  { value: "Solomon Islands", label: "Solomon Islands" },
  { value: "Somalia", label: "Somalia" },
  { value: "South Africa", label: "South Africa" },
  {
    value: "South Georgia and The South Sandwich Islands",
    label: "South Georgia and The South Sandwich Islands",
  },
  { value: "Spain", label: "Spain" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "Sudan", label: "Sudan" },
  { value: "Suriname", label: "Suriname" },
  { value: "Svalbard and Jan Mayen", label: "Svalbard and Jan Mayen" },
  { value: "Eswatini", label: "Eswatini" },
  { value: "Sweden", label: "Sweden" },
  { value: "Switzerland", label: "Switzerland" },
  { value: "Syrian Arab Republic", label: "Syrian Arab Republic" },
  { value: "Taiwan (ROC)", label: "Taiwan (ROC)" },
  { value: "Tajikistan", label: "Tajikistan" },
  {
    value: "Tanzania, United Republic of",
    label: "Tanzania, United Republic of",
  },
  { value: "Thailand", label: "Thailand" },
  { value: "Timor-leste", label: "Timor-leste" },
  { value: "Togo", label: "Togo" },
  { value: "Tokelau", label: "Tokelau" },
  { value: "Tonga", label: "Tonga" },
  { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
  { value: "Tunisia", label: "Tunisia" },
  { value: "Turkey", label: "Turkey" },
  { value: "Turkmenistan", label: "Turkmenistan" },
  { value: "Turks and Caicos Islands", label: "Turks and Caicos Islands" },
  { value: "Tuvalu", label: "Tuvalu" },
  { value: "Uganda", label: "Uganda" },
  { value: "Ukraine", label: "Ukraine" },
  { value: "United Arab Emirates", label: "United Arab Emirates" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "United States", label: "United States" },
  {
    value: "United States Minor Outlying Islands",
    label: "United States Minor Outlying Islands",
  },
  { value: "Uruguay", label: "Uruguay" },
  { value: "Uzbekistan", label: "Uzbekistan" },
  { value: "Vanuatu", label: "Vanuatu" },
  { value: "Venezuela", label: "Venezuela" },
  { value: "Vietnam", label: "Vietnam" },
  { value: "Virgin Islands, British", label: "Virgin Islands, British" },
  { value: "Virgin Islands, U.S.", label: "Virgin Islands, U.S." },
  { value: "Wallis and Futuna", label: "Wallis and Futuna" },
  { value: "Western Sahara", label: "Western Sahara" },
  { value: "Yemen", label: "Yemen" },
  { value: "Zambia", label: "Zambia" },
  { value: "Zimbabwe", label: "Zimbabwe" },
];

export default function Pro({params}:any) {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [imageFile, setImageFile] = useState();
  const [isSubmitting, setSubmitted] = useState(false);


  const router = useRouter();

  async function addProfileImageToStorage(file: any) {
    const storageRef = ref(storage, `userProfileImages/${file.name + v4()}`);
    const response = await uploadBytes(storageRef, file);
    const snapshot = response.ref;
    const getProfileURL = await getDownloadURL(snapshot);
    if (getProfileURL) {
      if (response) {
        toast.success("Profile Image saved successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return getProfileURL;
      } else {
        toast.error("Failed to add Profile", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  }

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader() as any;
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmitted(true);
    let userPicUrl;
    if (imageFile) {
      userPicUrl = await addProfileImageToStorage(imageFile);
    }
    const userInfo = data;
    if (userPicUrl) {
      userInfo.profileUrl = userPicUrl;
    }
    userInfo.user = params.userid;
    try {
      const response = await addUserIdentity(userInfo);
      if (response) {
        toast.success("Address saved successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push(`/register/completeYourProfile/${params.userid}`);
      }
    } catch (e) {
      toast.error("Failed to save Identity", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <form
      className="container mx-auto px-3 lg:px-64 min-h-[90vh] flex flex-col justify-center items-center gap-5 mt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Enter your public name */}
      <div className="border rounded flex-1 flex-col w-full">
        <div className="py-2 border-b text-xs bg-[#FAFAFA] px-4">
          <h1 className="text-base font-semibold">
            Enter your public identity
          </h1>
        </div>
        <div className="py-5 flex-1">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-[10rem] h-[10rem]">
              <Image
                src={selectedImage || "/images/def_fl_128.avif"}
                alt="default image"
                width={200}
                height={200}
                loading="lazy"
                className="border h-full w-full rounded-lg object-cover drop-shadow-lg p-2"
              />
            </div>
            <label htmlFor="image">
              <div className="bg-[#4FBFA3] px-6 py-1 w-fit rounded-md text-sm text-white">
                Upload Photo
              </div>
              <input
                onChange={handleImageChange}
                type="file"
                className="hidden"
                accept="image/*"
                id="image"
              />
            </label>
          </div>
          <div className="px-6 space-y-2">
            <h2 className="text-sm">Screen Name</h2>
            <div className="space-y-1">
              <div className="text-xs">
                This name appears next to your profile photo
              </div>
              <input
                type="text"
                className="w-full border px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3]"
                placeholder="Screen Name"
                {...register("ScreenName", { required: true, minLength: 5 })}
              />
              {errors.ScreenName && (
                <p className="text-sm text-red-500">
                  Please enter a valid Name
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* end Enter your public name */}
      {/* Enter your Contact Information */}
      <div className="border rounded flex-1 flex-col w-full pb-5">
        <div className="py-2 border-b text-xs bg-[#FAFAFA] px-6">
          <h1 className="text-base font-semibold">
            Enter your contact information
          </h1>
        </div>
        <div className="py-5 flex-1 space-y-3 px-5">
          <label className="px-6 space-y-2">
            <h2 className="text-sm">Search Address</h2>
            <input
              type="text"
              className="w-full border-b px-3 py-1.5 focus:outline-none focus:border-[#4FBFA3]"
              placeholder="Enter a location"
              {...register("address", { required: true, minLength: 5 })}
            />
            {errors.address && (
              <p className="text-sm text-red-500">
                Please enter a valid Adress
              </p>
            )}
          </label>
          <label className="px-6 space-y-1">
            <h2 className="text-sm">Country</h2>
            <select
              {...register("country", { required: true })}
              className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-[#4FBFA3]"
              required
            >
              {countryOptions.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </label>
          <label className="px-6 space-y-1">
            <h2 className="text-sm">
              Street <span className="text-red-500">*</span>
            </h2>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-[#4FBFA3]"
              {...register("street", { required: true})}
            />
            {errors.street && (
              <p className="text-sm text-red-500">
                Please enter a valid Street
              </p>
            )}
          </label>
          <div className="flex gap-2 flex-wrap">
            <label className="space-y-1 flex-1">
              <h2 className="text-sm">
                City <span className="text-red-500">*</span>
              </h2>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-[#4FBFA3]"
                {...register("city", { required: true })}
              />
              {errors.city && (
                <p className="text-sm text-red-500">
                  Please enter a valid City
                </p>
              )}
            </label>
            <label className="space-y-1 flex-1">
              <h2 className="text-sm">
              Province <span className="text-red-500">*</span>
              </h2>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-[#4FBFA3]"
                {...register("state", { required: true})}
              />
              {errors.state && (
                <p className="text-sm text-red-500">
                  Please enter a valid State
                </p>
              )}
            </label>
            <label className="space-y-1 flex-1">
              <h2 className="text-sm">
                Postal Code <span className="text-red-500">*</span>
              </h2>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-[#4FBFA3]"
                {...register("postalCode", { required: true })}
              />
              {errors.postalCode && (
                <p className="text-sm text-red-500">
                  Please enter a valid postalCode
                </p>
              )}
            </label>
          </div>
          <label className="px-6 space-y-1">
            <h2 className="text-sm">
              Suburb/ district/ neighborhood{" "}
              <span className="text-red-500">*</span>
            </h2>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-[#4FBFA3]"
              {...register("neigborhood", { required: true, minLength: 5 })}
            />
            {errors.neigborhood && (
              <p className="text-sm text-red-500">
                Please enter a valid neigborhood Address
              </p>
            )}
          </label>
        </div>
      </div>
      {/* end Enter your Contact Information */}
      <div className="w-full mb-10 mt-5 ">
        <Button disabled={isSubmitting ? true : false}>
          {isSubmitting ? (
            <div className="animate-spin">
              <VscLoading size={25} />
            </div>
          ) : (
            "Save"
          )}
        </Button>
      </div>
    </form>
  );
}

import { RxCross2 } from "react-icons/rx"
import Input from "../custom_elements/Input"
import Button from "../custom_elements/Button"
import { ChangeEvent } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useRef, useState } from "react";
import { setUser } from "../../store/features/userSlice";
import axios from "axios";
import { toast } from "react-hot-toast";

interface EditProfileModalProps {
  handleProfileEditModal: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  handleProfileEditModal
}) => {
  const loggedUser = useAppSelector(state => state.user)
  const darkTheme = useAppSelector(state => state.theme.dark)
  const dispatch = useAppDispatch()

  const [ avatarImg, setAvatarImg ] = useState<File>()
  const [ coverImg, setCoverImg ] = useState<File>()

  // upload button refs
  const avatarFileInputRef = useRef<HTMLInputElement>(null);
  const coverFileInputRef = useRef<HTMLInputElement>(null);

  const { 
    handleSubmit,
    register,
    formState: {
        errors
    }
  } = useForm<FieldValues>();

  const handleCoverClick = () => {
    if (coverFileInputRef.current) {
      coverFileInputRef.current.click();
    }
  }

  const handleAvatarClick = () => {
    if (avatarFileInputRef.current) {
      avatarFileInputRef.current.click();
    }
  }

  const handleAvatarUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvatarImg(e.target.files[0])

    }
  }
  
  const handleCoverUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCoverImg(e.target.files[0])
    }
  }

  const updateAccount: SubmitHandler<FieldValues> = async (data) => {
    
    try {
      const formData = new FormData();    
  
      for (const entry in data) {
        if (entry === 'avatar' && avatarImg) {
          formData.append("avatar", avatarImg);
        }
        else if (entry === 'cover_image' && coverImg) {
          formData.append("cover_image", coverImg);
        }
        else {
          formData.append(entry, data[entry]);
        }
      }
  
      // Indicating the loader toaster
      toast.loading('Saving...');
      
      const userUpdate = await axios.patch(import.meta.env.VITE_API_SERVER_URL + `/users/${loggedUser.id}`, formData, {withCredentials: true});      
      
      // Updating redux user object data
      dispatch(setUser(userUpdate.data))

      toast.dismiss();
      toast.success('Info updated!');
      
      handleProfileEditModal();
      
    } catch (error) {
      toast.dismiss();
      toast.error('Something went wrong');
    }
  }

  return (
    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full overflow-hidden bg-neutral-500/20">
      <div className="
          dark:text-neutral-100
          text-zinc-900
          dark:bg-[#15202B]
          bg-white
          rounded-none
          w-full
          h-full
          flex
          flex-col
          overflow-auto
          sm:h-[90%]
          sm:w-[36rem]
          sm:rounded-2xl
          md:h-[660px]
          md:w-[36rem]
          md:rounded-2xl
      ">
          <div className='flex items-center justify-between p-3 sticky top-0 z-50 dark:bg-[#15202B] bg-white'>
              <div className="flex items-center">
                <div 
                  onClick={handleProfileEditModal}
                  className='
                      cursor-pointer
                      p-1.5
                      hover:bg-neutral-200/20
                      rounded-full
                      transition
                  '
                >
                  <RxCross2 size={22} style={{ color: `${darkTheme ? 'rgba(255, 255, 255, 0.6)' : 'rgba(30, 30, 30, 0.6)'}` }} />
                </div>
                <div className='ml-6 font-semibold text-lg'>
                  Edit profile
                </div>
              </div>
              <div className="text-sm flex items-end">
                <Button
                  medium
                  themeable
                  themedHover
                  onClick={handleSubmit(updateAccount)}
                  value='Save'
                />
              </div>
          </div>
          <div className='
              flex
              flex-col
              overflow-x-hidden
              items-center
              w-full
              mx-auto
              h-full
          '>
              <div className='w-full mb-10 flex flex-col h-full justify-between'>
                <div className='flex flex-col gap-5'>
                  {
                    loggedUser.cover_image ? (
                      <div className="relative bg-[#10171f] overflow-hidden flex items-center justify-center h-48">
                        <img 
                          src={loggedUser.cover_image}
                          {
                            ...register(
                              "cover_image", {
                                value: loggedUser.cover_image
                              }
                            )
                          }
                          className="
                            w-full
                            object-cover
                          "
                        />
                        <div 
                          onClick={handleCoverClick}
                          className="
                            cursor-pointer
                            absolute
                            w-fit
                            p-4
                            rounded-full 
                            bg-gray-900/50
                            hover:bg-gray-600/50
                            transition
                          "
                        >
                          <input 
                            ref={avatarFileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleCoverUpload}
                            className='absolute top-0 left-0 w-0 opacity-0'
                          />
                          <MdOutlineAddPhotoAlternate size={20} style={{ color: `rgb(255, 255, 255)` }} />
                        </div>
                      </div>
                    ) : (
                      <div className=" bg-[#10171f] flex items-center justify-center h-48">
                        <div 
                          onClick={handleCoverClick}
                          {
                            ...register(
                              "cover_image", {
                                value: ""
                              }
                            )
                          }
                          className="
                            cursor-pointer
                            w-fit
                            p-4
                            rounded-full 
                            bg-gray-900/50
                            hover:bg-gray-600/50
                            transition
                          "
                        >
                          <input 
                            ref={coverFileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleCoverUpload}
                            className='absolute top-0 left-0 w-0 opacity-0'
                          />
                          <MdOutlineAddPhotoAlternate size={20} style={{ color: `rgb(255, 255, 255)` }} />
                        </div>
                      </div>
                    )
                  }
                  {
                    loggedUser.avatar && (
                      <div className="relative">
                        <div
                          onClick={handleAvatarClick}
                          className="
                            z-10
                            absolute
                            ml-[42px]
                            -mt-9
                            cursor-pointer
                            w-fit
                            p-4
                            rounded-full
                            bg-gray-900/50
                            hover:bg-gray-600/50
                            transition
                          "
                        >
                          <input 
                            ref={avatarFileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarUpload}
                            className='absolute top-0 left-0 w-0 opacity-0'
                          />
                          <MdOutlineAddPhotoAlternate size={20}style={{ color: `rgb(255, 255, 255)` }} />
                        </div>
                        <img 
                          src={loggedUser.avatar}
                          {
                            ...register(
                              "avatar", {
                                value: loggedUser.avatar
                              }
                            )
                          }
                          alt="profile" 
                          className="
                            w-28
                            h-28
                            object-cover
                            rounded-full
                            p-1.5
                            ml-3
                            -mt-16
                            dark:bg-[#15202B]
                            bg-white
                          "
                        />
                      </div>
                    )
                  }
                  <div className="mx-4 flex flex-col gap-6">
                    <Input
                        required
                        id="name"
                        placeholder="Name"
                        type="text"
                        register={register}
                        RegExPattern={new RegExp('^[a-zA-Z-0-9]{4,20}$')}
                        errors={errors}
                        textValue={loggedUser.username || ""}
                    />
                    <Input
                        id="bio"
                        placeholder="Bio"
                        type="text"
                        register={register}
                        errors={errors}
                        textValue={loggedUser.bio || ""}
                    />
                    <Input
                        id="location"
                        placeholder="Location"
                        type="text"
                        register={register}
                        errors={errors}
                        textValue={loggedUser.location || ""}
                    />
                    <Input
                        id="website"
                        placeholder="Website"
                        type="text"
                        register={register}
                        errors={errors}
                        textValue={loggedUser.website || ""}
                    />
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default EditProfileModal
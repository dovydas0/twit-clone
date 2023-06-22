import { RxCross2 } from "react-icons/rx"
import Input from "../custom_elements/Input"
import Button from "../custom_elements/Button"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { useAppSelector } from "../../store/store";

interface EditProfileModalProps {
  handleProfileEditModal: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  handleProfileEditModal
}) => {

  const loggedUser = useAppSelector(state => state.user)

  const { 
    handleSubmit,
    register,
    formState: {
        errors
    }
  } = useForm<FieldValues>();

  const updateAccount: SubmitHandler<FieldValues> = async (data) => {        
    console.log('update');
    
  }

  return (
    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full overflow-hidden bg-slate-400/20">
      <div className="
          bg-[#15202B]
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
          <div className='flex items-center justify-between p-3 sticky top-0 z-50 bg-[#15202B]'>
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
                  <RxCross2 size={22} />
                </div>
                <div className='ml-6 font-semibold text-lg'>
                  Edit profile
                </div>
              </div>
              <div className="text-sm flex items-end">
                <Button
                  medium
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
                  <div className=" bg-[#10171f] flex items-center justify-center h-48">
                    <div 
                      onClick={() => {}}
                      className="
                        cursor-pointer
                        w-fit
                        p-4
                        rounded-full 
                        bg-gray-900
                        hover:bg-gray-600/20
                        transition
                      "
                    >
                      <MdOutlineAddPhotoAlternate size={20} />
                    </div>
                  </div>
                  {
                    loggedUser.avatar && (
                      <div className="relative">
                        <div 
                          onClick={() => {}}
                          className="
                            z-10
                            absolute
                            ml-[42px]
                            -mt-9
                            cursor-pointer
                            w-fit
                            p-4
                            rounded-full
                            bg-gray-900/60
                            hover:bg-gray-900/40
                            transition
                          "
                        >
                          <MdOutlineAddPhotoAlternate size={20} />
                        </div>
                        <img src={loggedUser.avatar} alt="profile" 
                        className="
                          w-28
                          rounded-full
                          p-1.5
                          ml-3
                          -mt-16
                          bg-[#15202B]
                          opacity-60
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
                        RegExPattern={new RegExp('^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$')}
                        errors={errors}
                        textValue={loggedUser.username || ""}
                    />
                    <Input
                        required
                        id="bio"
                        placeholder="Bio"
                        type="text"
                        register={register}
                        errors={errors}
                    />
                    <Input
                        required
                        id="location"
                        placeholder="Location"
                        type="text"
                        register={register}
                        errors={errors}
                    />
                    <Input
                        required
                        id="website"
                        placeholder="Website"
                        type="text"
                        register={register}
                        errors={errors}
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
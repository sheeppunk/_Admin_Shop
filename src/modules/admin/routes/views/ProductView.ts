import { getProductByID } from '@/modules/products/actions';
import { useQuery } from '@tanstack/vue-query';
import { defineComponent, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useFieldArray, useForm } from 'vee-validate';
import * as yup from 'yup';
import customInput from '@/modules/common/components/customInput.vue';
import customTextArea from '@/modules/common/components/customTextArea.vue';

const validationSchema = yup.object({
  title: yup.string().required().min(3),
  slug: yup.string().required().min(5),
  price: yup.string().required(),
  stock: yup.string().required(),
  description: yup.string().required().min(5),
  gender: yup.string().required(),
});

export default defineComponent({
  components: {
    customInput,
    customTextArea,
  },
  props: {
    productID: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const {
      data: product,
      isError,
      isLoading,
    } = useQuery({
      queryKey: ['product', props.productID],
      queryFn: () => getProductByID(props.productID),
      retry: false,
    });

    const { values, defineField, errors, handleSubmit, resetForm,meta } = useForm({
      validationSchema,
      initialValues: product.value,
    });

    ///29072025 me quede en el video 44 min 0:38
    const [title, titleAttrs] = defineField('title');
    const [slug, slugAttrs] = defineField('slug');
    const [price, priceAttrs] = defineField('price');
    const [stock, stockAttrs] = defineField('stock');
    const [description, descriptionAttrs] = defineField('description');
    const [gender, genderAttrs] = defineField('gender');
    const { fields:images }=useFieldArray<string>('images');

    const { fields: sizes, remove: removeSize, push: pushSizes } = useFieldArray<string>('sizes');

    const onSubmit = handleSubmit((value) => {
      console.log({ value });
    });

    const toggleSizes = (size: string) => {
      const currentsSizes = sizes.value.map((s) => s.value);
      const hasSizes = currentsSizes.includes(size);
      if (hasSizes) {
        removeSize(currentsSizes.indexOf(size));
      } else {
        pushSizes(size);
      }
    };

    watchEffect(() => {
      if (isError.value && !isLoading.value) {
        router.replace('/admin/products');
        return;
      }
    });

    watch(
      product,
      () => {
        if (!product) return;
        resetForm({
          values: product.value,
        });
      },
      {
        deep: true,
        inmediate: true
      },
    );

    return {
      values,
      title,
      titleAttrs,
      slug,
      slugAttrs,
      price,
      priceAttrs,
      stock,
      stockAttrs,
      description,
      descriptionAttrs,
      gender,
      genderAttrs,
      images,
      meta,
      errors,
      allSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      onSubmit,
      toggleSizes,

      hasSize:(size:string)=>{
        const currentSizes = sizes.value.map((s)=>s.value);
        return currentSizes.includes(size);
      }
    };
  },
});

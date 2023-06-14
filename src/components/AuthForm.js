import {
  Form as RouterForm,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";
import classes from "./AuthForm.module.css";
function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";
  return (
    <div id={classes.form_container}>
      <RouterForm method="post" className={classes.form}>
        <h1>{isLogin ? "로그인" : "Create a new user"}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <div className={classes.panel_inner}>
          <div className={classes.id_pw_wrap}>
            <div className={classes.input_row}>
              <input
                className={classes.input_text}
                id="email"
                type="email"
                name="email"
                placeholder="이메일"
                autoComplete="off"
                required
              />
            </div>
            <div className={classes.input_row}>
              <input
                className={classes.input_text}
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호"
                maxLength={16}
                required
              />
            </div>
          </div>
          <div className={classes.btn_login_wrap}>
            <button className={classes.btn_login} disabled={isSubmitting}>
              <span className={classes.btn_text}>
                {isSubmitting ? "로그인 중..." : "로그인"}
              </span>
            </button>
          </div>
        </div>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "회원가입" : "로그인"}
          </Link>
        </div>
      </RouterForm>
    </div>
  );
}

export default AuthForm;
